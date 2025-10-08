import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'c2fvhdju',
    dataset: 'production'
  },
  deployment: {
    appId: 'jzht3kefa2cy495h69zdps5x',
    autoUpdates: true,
  }
})
