export const download = (url: string) => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest()
  xhr.responseType = 'blob'
  xhr.onload = () => {
    resolve(xhr.response)
  };
  xhr.open('GET', url)
  xhr.send()
})