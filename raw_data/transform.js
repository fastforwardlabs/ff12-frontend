let fs = require('fs')

// random shuffle from https://stackoverflow.com/questions/11935175/sampling-a-random-subset-from-an-array
function getRandomSubarray(arr, size) {
  var shuffled = arr.slice(0),
    i = arr.length,
    temp,
    index
  while (i--) {
    index = Math.floor((i + 1) * Math.random())
    temp = shuffled[index]
    shuffled[index] = shuffled[i]
    shuffled[i] = temp
  }
  return shuffled.slice(0, size)
}

let inlier_array = [
  'test_inliers.json',
  'vae_in_score.json',
  'ae_in_score.json',
]
let outlier_array = [
  'test_outliers.json',
  'vae_out_score.json',
  'ae_out_score.json',
]

let results = {}

function setData(file_array, result_key, number) {
  let inliers_data = JSON.parse(fs.readFileSync(file_array[0], 'utf8'))
  let data_keys = Object.keys(inliers_data[0])
  let inliers_arrays = inliers_data.map((obj, i) => [
    i,
    ...Object.entries(obj).map(o => parseInt(o[1])),
  ])

  // add index
  data_keys.unshift('index')

  let vae_inliers_data = JSON.parse(fs.readFileSync(file_array[1], 'utf8'))

  data_keys.push('vae')
  let with_vae = inliers_arrays.map((a, i) => {
    let score = vae_inliers_data[i]
    a.push(score)
    return a
  })

  let ae_inliers_data = JSON.parse(fs.readFileSync(file_array[2], 'utf8'))

  data_keys.push('ae')
  let with_ae = with_vae.map((a, i) => {
    let score = ae_inliers_data[i]
    a.push(score)
    return a
  })

  results['key'] = data_keys
  results[result_key] = getRandomSubarray(with_ae, number)
}

setData(inlier_array, 'inliers', 5000)
setData(outlier_array, 'outliers', 5000)

let mix = getRandomSubarray([...results.inliers, ...results.outliers], 10000)
let output = { keys: results['key'], data: mix }

fs.writeFileSync('../public/sampled.json', JSON.stringify(output))
