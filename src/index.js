import * as core from '@actions/core'
import yaml from 'js-yaml'

async function main() {
    const version = process.env.GITHUB_ACTION_REF
        ? `\u001b[35;1m${process.env.GITHUB_ACTION_REF}`
        : '\u001b[33;1mSource'
    core.info(`🏳️ Starting Validate Outputs Action - ${version}`)

    // // Debug
    // core.startGroup('Debug: github.context')
    // console.log(github.context)
    // core.endGroup() // Debug github.context
    // core.startGroup('Debug: process.env')
    // console.log(process.env)
    // core.endGroup() // Debug process.env

    // Inputs
    const inputs = {
        outputs: core.getInput('outputs'),
        data: core.getInput('data'),
    }

    core.startGroup('Inputs')
    console.log(inputs)
    core.endGroup() // Inputs

    core.startGroup('Outputs')
    const outputs = JSON.parse(inputs.outputs)
    console.log(outputs)
    core.endGroup() // Outputs

    core.startGroup('Data')
    const data = yaml.load(inputs.data)
    console.log(data)
    core.endGroup() // Data

    // Action
    core.info('⌛ Processing...')
    const errors = {}
    for (const [key, value] of Object.entries(data)) {
        console.log(`--- \u001b[32;1m${key}`)
        console.log('typeof value:', typeof value)
        const parsed = typeof value === 'string' ? value : JSON.stringify(value)
        console.log(`\u001b[34;1m expected:\u001b[0m`, parsed)
        console.log('typeof outputs[key]:', typeof outputs[key])
        const result =
            typeof outputs[key] === 'string' ? outputs[key] : JSON.stringify(outputs[key])
        console.log('  \u001b[36;1m result:\u001b[0m', result)

        // Check if Key Exist
        if (!result) {
            console.log(`\u001b[31;1m missing`)
            errors[key] = `Missing Output: ${key}`
            continue
        }

        if (value === null) continue

        // Check if Value equals Value
        if (parsed !== result) {
            console.log(`\u001b[33;1m invalid`)
            const error = `Invalid Output: ${key} --- ${parsed} != ${result}`
            console.log(error)
            errors[key] = error
        }
    }
    console.log('errors:', errors)

    // Outputs
    const keys = Object.keys(data)
    console.log('keys:', keys)
    const failed = Object.keys(errors)
    console.log('failed:', failed)

    core.setOutput('errors', errors)
    core.setOutput('keys', keys)
    core.setOutput('failed', failed)

    // Finish
    if (failed.length) {
        const error = `Failed Validating ${failed.length} Outputs: ${failed.join(',')}`
        core.info(`🚫 \u001b[31;1m${error}`)
        core.setFailed(error)
    } else {
        core.info(`✅ \u001b[32;1mValidated ${keys.length} Outputs: ${keys.join(',')}`)
    }
}

try {
    await main()
} catch (e) {
    core.debug(e)
    core.info(e.message)
    core.setFailed(e.message)
}
