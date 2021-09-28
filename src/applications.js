/* eslint-disable no-async-promise-executor */
import axios from 'axios'
import path from 'path'

// 远程加载子应用
function runScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = url
    script.onload = resolve
    script.onerror = reject
    const firstScript = document.getElementsByTagName('script')[0]
    firstScript.parentNode.insertBefore(script, firstScript)
  })
}

function getManifest(url) {
  return new Promise(async(resolve, reject) => {
    const { data } = await axios.get(url).catch(reject)
    const { entrypoints, publicPath } = data
    const assets = entrypoints.app.assets
    for (let i = 0; i < assets.length; i++) {
      await runScript(publicPath + assets[i]).then(() => {
        if (i === assets.length - 1) {
          resolve()
        }
      }).catch(reject)
    }
  })
}

/**
 * 
 * @param {*} 应用地址
 * @param {*} globalVar 微前端应用会挂载到window对象上
 * @returns 
 */
function loadApp(url, globalVar) {
  return new Promise((resolve, reject) => {
    getManifest(`${url}/manifest.json`, globalVar)
      .then(() => {
        resolve(window[globalVar])
      })
      .catch(reject)
  })
}

function getURL(url, domain) {
  return process.env.NODE_ENV === 'production' ? `${domain}${url}` : url
}

function getActiveURL(url) {
  return path.join(process.env.VUE_APP_BASE_URL, url)
}

export default [
  {
    // 子应用名称
    name: 'child1',
    // 子应用加载函数，是一个promise
    app: loadApp(getURL('/single-spa-child1', 'https://nangongpo.github.io'), 'single-spa-child1'),
    // 当路由满足条件时（返回true），激活（挂载）子应用
    activeWhen: location => location.pathname.startsWith(getActiveURL('/single-spa-child1')),
    // 传递给子应用的对象
    customProps: {
      token: '自定义token'
    }
  },
  {
    name: 'child2',
    app: loadApp(getURL('/single-spa-child2', 'https://nangongpo.github.io'), 'single-spa-child2'),
    activeWhen: location => location.pathname.startsWith(getActiveURL('/single-spa-child2')),
    customProps: {
      token: '自定义token'
    }
  }
]
