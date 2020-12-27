// 根据环境选择配置
interface Setting {
  baseURL: string
  saveEdit: string
  [props: string]: any
}

interface EnvSetting {
  development: Setting
  production: Setting
  [props: string]: any
}

const Settings: EnvSetting = {
  development: {
    baseURL: 'http://localhost:7002',
    fileURL: 'http://spirithought.net',
    saveEdit: 'SPT_LOCAL_SAVE_EDIT',
  },
  production: {
    baseURL: 'http://spirithought.net/api/',
    fileURL: 'http://spirithought.net',
    saveEdit: 'SPT_PROD_SAVE_EDIT',
  }
}


export default Settings[process.env.NODE_ENV];
