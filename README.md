<picture>
  <source 
    srcset="https://raw.githubusercontent.com/gemini-testing/gh-actions-reports-ttl-cleaner/b2575289938e94715aa5593b6009f15cc66643c1/docs/images/logo-dark.svg" 
    media="(prefers-color-scheme: dark)"
  >
  <img 
    src="https://raw.githubusercontent.com/gemini-testing/gh-actions-reports-ttl-cleaner/b2575289938e94715aa5593b6009f15cc66643c1/docs/images/logo-light.svg" 
    alt="Logo"
  >
</picture>
<br><br>
A GitHub Action to automatically clean up old Testplane HTML reports stored on the `gh-pages` branch of your repository.

## Features

- 🗑️ Deletes Testplane reports older than a specified time-to-live (TTL)
- ⚙️ Configurable TTL (default: 90 days)
- 📂 Customizable report directory paths

## Usage

Add this action to your workflow to regularly clean up old reports. Example configuration:

```yaml
- name: Clean old reports
  uses: gemini-testing/gh-actions-reports-ttl-cleaner@v1
  with:
    html-report-prefix: 'my-reports-dir'  # Optional
    ttl: '30'                             # Optional (days)
    user-name: 'report-cleaner'           # Optional
    user-email: 'cleaner@example.com'     # Optional
```

### Inputs

| Parameter            | Description                             | Default                          |
|----------------------|-----------------------------------------|----------------------------------|
| `html-report-prefix` | Path prefix for Testplane reports       | `testplane-reports`              |
| `ttl`                | Time-to-live for reports in days        | `90`                             |
| `user-name`          | Git commit author name                  | `gh-actions-reports-ttl-cleaner` |
| `user-email`         | Git commit author email                 | (empty)                         |

## Documentation

For complete setup instructions see the [official documentation](https://testplane.io/docs/v8/guides/how-to-run-on-github/#clean-up-old-reports).
