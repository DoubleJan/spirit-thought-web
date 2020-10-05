// 根据环境选择配置
interface Setting {
  baseURL: string
  [props: string]: any
}

interface EnvSetting {
  development: Setting
  production: Setting
  [props: string]: any
}

const Settings: EnvSetting = {
  development: {
    baseURL: 'http://localhost:7002'
  },
  production: {
    baseURL: 'http://spirithought.net/api/'
  }
}


export default Settings[process.env.NODE_ENV];
