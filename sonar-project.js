const sonarqubeScanner = require("sonarqube-scanner");
sonarqubeScanner(
  {
    serverUrl: "http://localhost:9000",
    token: "5b974cc8ae52cd5b57c28c5a0026bc08a8b26b31",
    options: {
      "sonar.sources": "./src",
      "sonar.exclusions": "**/*.spec.jsx",
      "sonar.tests": "./src",
      "sonar.test.inclusions": "**/*.spec.js,**/*.spec.jsx",
      "sonar.typescript.lcov.reportPaths": "coverage/lcov.info",
      "sonar.testExecutionReportPaths": "reports/test-report.xml",
    },
  },
  () => {},
);