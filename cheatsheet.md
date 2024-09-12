```
# NVS (Node Version Switcher) commands:
nvs add 20                  # Add Node.js version 20 to NVS
nvs use 20                  # Switch to use Node.js version 20

# NVM (Node Version Manager) commands:
nvm install 20              # Install Node.js version 20 using NVM
nvm use 20                  # Switch to use Node.js version 20

# Playwright commands:
npx playwright test          # Run all Playwright tests
npx playwright test <some-part-of-file-name>  # Run tests matching a part of the file name
npx playwright test --ui     # Launch Playwright's interactive test runner UI
npx playwright codegen       # Start the Playwright code generator tool
npx playwright test --debug  # Run tests in debug mode with debugging tools enabled
```

npx playwright test comp --reporter=dot
npx playwright test comp --reporter=list
npx playwright test comp --reporter=line
