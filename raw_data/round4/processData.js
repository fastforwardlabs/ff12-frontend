let fs = require('fs-extra')

// ...data,ocsvm class, ae class, vae class, gan class

// let folders = ['ocsvm', 'ae', 'vae', 'gan']
let folders = ['pca', 'ocsvm', 'ae', 'bigan']

let allclassed = [
  ['inliers', 'in'],
  ['outliers', 'out'],
].map(label => {
  // inliers
  let filenames = folders.map(n => {
    console.log(n)
    if (n != 'gan') {
      return n + '/' + n + '_' + label[1] + '_score.json'
    } else {
      return n + '/' + 'bigan' + '_' + label[1] + '_score.json'
    }
  })

  let classifications = filenames.map(n => {
    let edited = fs.readFileSync(n, 'utf-8').replace(/\}/g, '},')
    let trimmed = edited.substring(0, edited.length - 1)
    return JSON.parse('[' + trimmed + ']')
  })

  let liers_raw = JSON.parse(
    fs.readFileSync('testdata/test_' + label[0] + '.json', 'utf-8')
  )
  let liers_flat = liers_raw.map(o => Object.values(o))

  // add truth and classifications
  let classed = liers_flat.map((a, i) => {
    // classifications
    for (let j = 0; j < classifications.length; j++) {
      let classed = classifications[j][i].class
      a.push(classed)
    }
    return a
  })

  return classed
})

fs.writeFileSync(
  'combined.json',
  JSON.stringify([...allclassed[0], ...allclassed[1]])
)
