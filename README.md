[![GitHub Tag Major](https://img.shields.io/github/v/tag/cssnr/validate-outputs-action?sort=semver&filter=!v*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/validate-outputs-action/tags)
[![GitHub Tag Minor](https://img.shields.io/github/v/tag/cssnr/validate-outputs-action?sort=semver&filter=!v*.*.*&logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/validate-outputs-action/releases)
[![GitHub Release Version](https://img.shields.io/github/v/release/cssnr/validate-outputs-action?logo=git&logoColor=white&labelColor=585858&label=%20)](https://github.com/cssnr/validate-outputs-action/releases/latest)
[![GitHub Dist Size](https://img.shields.io/github/size/cssnr/validate-outputs-action/dist%2Findex.js?logo=bookstack&logoColor=white&label=dist%20size)](https://github.com/cssnr/validate-outputs-action/blob/master/src)
[![Workflow Release](https://img.shields.io/github/actions/workflow/status/cssnr/validate-outputs-action/release.yaml?logo=cachet&label=release)](https://github.com/cssnr/validate-outputs-action/actions/workflows/release.yaml)
[![Workflow Test](https://img.shields.io/github/actions/workflow/status/cssnr/validate-outputs-action/test.yaml?logo=cachet&label=test)](https://github.com/cssnr/validate-outputs-action/actions/workflows/test.yaml)
[![Workflow Lint](https://img.shields.io/github/actions/workflow/status/cssnr/validate-outputs-action/lint.yaml?logo=cachet&label=lint)](https://github.com/cssnr/validate-outputs-action/actions/workflows/lint.yaml)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=cssnr_validate-outputs-action&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=cssnr_validate-outputs-action)
[![GitHub Last Commit](https://img.shields.io/github/last-commit/cssnr/validate-outputs-action?logo=github&label=updated)](https://github.com/cssnr/validate-outputs-action/pulse)
[![Codeberg Last Commit](https://img.shields.io/gitea/last-commit/cssnr/validate-outputs-action/master?gitea_url=https%3A%2F%2Fcodeberg.org%2F&logo=codeberg&logoColor=white&label=updated)](https://codeberg.org/cssnr/validate-outputs-action)
[![GitHub Contributors](https://img.shields.io/github/contributors-anon/cssnr/validate-outputs-action?logo=github)](https://github.com/cssnr/validate-outputs-action/graphs/contributors)
[![GitHub Repo Size](https://img.shields.io/github/repo-size/cssnr/validate-outputs-action?logo=bookstack&logoColor=white&label=repo%20size)](https://github.com/cssnr/validate-outputs-action?tab=readme-ov-file#readme)
[![GitHub Top Language](https://img.shields.io/github/languages/top/cssnr/validate-outputs-action?logo=htmx)](https://github.com/cssnr/validate-outputs-action)
[![GitHub Discussions](https://img.shields.io/github/discussions/cssnr/validate-outputs-action?logo=github)](https://github.com/cssnr/validate-outputs-action/discussions)
[![GitHub Forks](https://img.shields.io/github/forks/cssnr/validate-outputs-action?style=flat&logo=github)](https://github.com/cssnr/validate-outputs-action/forks)
[![GitHub Repo Stars](https://img.shields.io/github/stars/cssnr/validate-outputs-action?style=flat&logo=github)](https://github.com/cssnr/validate-outputs-action/stargazers)
[![GitHub Org Stars](https://img.shields.io/github/stars/cssnr?style=flat&logo=github&label=org%20stars)](https://cssnr.github.io/)
[![Discord](https://img.shields.io/discord/899171661457293343?logo=discord&logoColor=white&label=discord&color=7289da)](https://discord.gg/wXy6m2X8wY)
[![Ko-fi](https://img.shields.io/badge/Ko--fi-72a5f2?logo=kofi&label=support)](https://ko-fi.com/cssnr)

# Validate Outputs Action

- [Inputs](#Inputs)
- [Outputs](#Outputs)
- [Examples](#Examples)
- [Tags](#Tags)
- [Support](#Support)
- [Contributing](#Contributing)

Easily Validate Outputs from a GitHub Action or Workflow.

```yaml
- name: 'Validate Outputs'
  uses: cssnr/validate-outputs-action@master
  with:
    outputs: ${{ toJSON(steps.test.outputs) }}
    data: |
      output1: must equal this
      output2: # must exist
      output3: ${{ steps.validate.outputs.output3 }}
```

## Inputs

| Input   | Required&nbsp;Value&nbsp;for&nbsp;the&nbsp;Input | Input&nbsp;Description |
| :------ | :----------------------------------------------- | :--------------------- |
| outputs | `${{ toJSON(steps.test.outputs) }}`              | Outputs JSON Data      |
| data    | [Data to Verify in YAML format](#outputs)        | Validation YAML Data   |

#### outputs

This should be your outputs JSON. If your step is named `test` set:

```yaml
outputs: ${{ toJSON(steps.test.outputs) }}
```

#### data

This is the data to validate the outputs.

Keys are Output Keys. If you set a value it will be checked for equality, otherwise only for existence.

```yaml
data: |
  output1: must equal this
  output2: # must exist
  output3: ${{ steps.validate.outputs.output3 }}
```

## Outputs

| Output | Description        |
| :----- | :----------------- |
| errors | Errors JSON Object |
| keys   | Checked JSON Keys  |
| failed | Failed JSON Keys   |

```yaml
- name: 'Validate Outputs'
  id: test
  uses: cssnr/validate-outputs-action@master
  with:
    outputs: ${{ toJSON(steps.test.outputs) }}
    data: |
      output1: must equal this

- name: 'Echo Outputs'
  run: |
    echo "errors: ${{ steps.test.outputs.errors }}"
    echo "keys: ${{ steps.test.outputs.keys }}"
    echo "failed: ${{ steps.test.outputs.failed }}"
```

## Examples

💡 _Click on an example heading to expand or collapse the example._

Examples Coming Soon...

For more examples, you can check out other projects using this action:  
https://github.com/cssnr/validate-outputs-action/network/dependents

## Tags

The following rolling [tags](https://github.com/cssnr/validate-outputs-action/tags) are maintained.

| Version&nbsp;Tag                                                                                                                                                                                                               | Rolling | Bugs | Feat. |   Name    |  Target  | Example  |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----: | :--: | :---: | :-------: | :------: | :------- |
| [![GitHub Tag Major](https://img.shields.io/github/v/tag/cssnr/validate-outputs-action?sort=semver&filter=!v*.*&style=for-the-badge&label=%20&color=44cc10)](https://github.com/cssnr/validate-outputs-action/releases/latest) |   ✅    |  ✅  |  ✅   | **Major** | `vN.x.x` | `vN`     |
| [![GitHub Tag Minor](https://img.shields.io/github/v/tag/cssnr/validate-outputs-action?sort=semver&filter=!v*.*.*&style=for-the-badge&label=%20&color=blue)](https://github.com/cssnr/validate-outputs-action/releases/latest) |   ✅    |  ✅  |  ❌   | **Minor** | `vN.N.x` | `vN.N`   |
| [![GitHub Release](https://img.shields.io/github/v/release/cssnr/validate-outputs-action?style=for-the-badge&label=%20&color=red)](https://github.com/cssnr/validate-outputs-action/releases/latest)                           |   ❌    |  ❌  |  ❌   | **Micro** | `vN.N.N` | `vN.N.N` |

You can view the release notes for each version on the [releases](https://github.com/cssnr/validate-outputs-action/releases) page.

The **Major** tag is recommended. It is the most up-to-date and always backwards compatible.
Breaking changes would result in a **Major** version bump. At a minimum you should use a **Minor** tag.

# Support

For general help or to request a feature, see:

- Q&A Discussion: https://github.com/cssnr/validate-outputs-action/discussions/categories/q-a
- Request a Feature: https://github.com/cssnr/validate-outputs-action/discussions/categories/feature-requests

If you are experiencing an issue/bug or getting unexpected results, you can:

- Report an Issue: https://github.com/cssnr/validate-outputs-action/issues
- Chat with us on Discord: https://discord.gg/wXy6m2X8wY
- Provide General Feedback: [https://cssnr.github.io/feedback/](https://cssnr.github.io/feedback/?app=Update%20Release%20Notes)

For more information, see the CSSNR [SUPPORT.md](https://github.com/cssnr/.github/blob/master/.github/SUPPORT.md#support).

# Contributing

If you would like to submit a PR, please review the [CONTRIBUTING.md](#contributing-ov-file).

Please consider making a donation to support the development of this project
and [additional](https://cssnr.com/) open source projects.

[![Ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/cssnr)

[![Actions Tools](https://raw.githubusercontent.com/smashedr/repo-images/refs/heads/master/actions/actions-tools.png)](https://actions-tools.cssnr.com/)

Additionally, you can support other [GitHub Actions](https://actions.cssnr.com/) I have published:

- [Stack Deploy Action](https://github.com/cssnr/stack-deploy-action?tab=readme-ov-file#readme)
- [Portainer Stack Deploy Action](https://github.com/cssnr/portainer-stack-deploy-action?tab=readme-ov-file#readme)
- [Docker Context Action](https://github.com/cssnr/docker-context-action?tab=readme-ov-file#readme)
- [Actions Up Action](https://github.com/cssnr/actions-up-action?tab=readme-ov-file#readme)
- [Zensical Action](https://github.com/cssnr/zensical-action?tab=readme-ov-file#readme)
- [VirusTotal Action](https://github.com/cssnr/virustotal-action?tab=readme-ov-file#readme)
- [Mirror Repository Action](https://github.com/cssnr/mirror-repository-action?tab=readme-ov-file#readme)
- [Update Version Tags Action](https://github.com/cssnr/update-version-tags-action?tab=readme-ov-file#readme)
- [Docker Tags Action](https://github.com/cssnr/docker-tags-action?tab=readme-ov-file#readme)
- [TOML Action](https://github.com/cssnr/toml-action?tab=readme-ov-file#readme)
- [Update JSON Value Action](https://github.com/cssnr/update-json-value-action?tab=readme-ov-file#readme)
- [JSON Key Value Check Action](https://github.com/cssnr/json-key-value-check-action?tab=readme-ov-file#readme)
- [Parse Issue Form Action](https://github.com/cssnr/parse-issue-form-action?tab=readme-ov-file#readme)
- [Cloudflare Purge Cache Action](https://github.com/cssnr/cloudflare-purge-cache-action?tab=readme-ov-file#readme)
- [Mozilla Addon Update Action](https://github.com/cssnr/mozilla-addon-update-action?tab=readme-ov-file#readme)
- [Package Changelog Action](https://github.com/cssnr/package-changelog-action?tab=readme-ov-file#readme)
- [NPM Outdated Check Action](https://github.com/cssnr/npm-outdated-action?tab=readme-ov-file#readme)
- [Label Creator Action](https://github.com/cssnr/label-creator-action?tab=readme-ov-file#readme)
- [Algolia Crawler Action](https://github.com/cssnr/algolia-crawler-action?tab=readme-ov-file#readme)
- [Upload Release Action](https://github.com/cssnr/upload-release-action?tab=readme-ov-file#readme)
- [Check Build Action](https://github.com/cssnr/check-build-action?tab=readme-ov-file#readme)
- [Web Request Action](https://github.com/cssnr/web-request-action?tab=readme-ov-file#readme)
- [Get Commit Action](https://github.com/cssnr/get-commit-action?tab=readme-ov-file#readme)

<details><summary>❔ Unpublished Actions</summary>

These actions are not published on the Marketplace, but may be useful.

- [cssnr/create-files-action](https://github.com/cssnr/create-files-action?tab=readme-ov-file#readme) - Create various files from templates.
- [cssnr/draft-release-action](https://github.com/cssnr/draft-release-action?tab=readme-ov-file#readme) - Keep a draft release ready to publish.
- [cssnr/env-json-action](https://github.com/cssnr/env-json-action?tab=readme-ov-file#readme) - Convert env file to json or vice versa.
- [cssnr/push-artifacts-action](https://github.com/cssnr/push-artifacts-action?tab=readme-ov-file#readme) - Sync files to a remote host with rsync.
- [smashedr/update-release-notes-action](https://github.com/smashedr/update-release-notes-action?tab=readme-ov-file#readme) - Update release notes.
- [smashedr/combine-release-notes-action](https://github.com/smashedr/combine-release-notes-action?tab=readme-ov-file#readme) - Combine release notes.

---

</details>

<details><summary>📝 Template Actions</summary>

These are basic action templates that I use for creating new actions.

- [javascript-action](https://github.com/smashedr/javascript-action?tab=readme-ov-file#readme) - JavaScript
- [typescript-action](https://github.com/smashedr/typescript-action?tab=readme-ov-file#readme) - TypeScript
- [py-test-action](https://github.com/smashedr/py-test-action?tab=readme-ov-file#readme) - Dockerfile Python
- [test-action-uv](https://github.com/smashedr/test-action-uv?tab=readme-ov-file#readme) - Dockerfile Python UV
- [docker-test-action](https://github.com/smashedr/docker-test-action?tab=readme-ov-file#readme) - Docker Image Python

Note: The `docker-test-action` builds, runs and pushes images to [GitHub Container Registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry).

---

</details>

For a full list of current projects visit: [https://cssnr.github.io/](https://cssnr.github.io/)
