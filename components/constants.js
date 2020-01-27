let fg = '#ebdbb2'
let bg = '#282828'

export let color = {
  red: '#cc241d',
  red_h: '#fb4934',
  green: '#9871a',
  green_h: '#b8bb26',
  yellow: '#d79921',
  yellow_h: '#fabd2f',
  blue: '#458588',
  blue_h: '#83a598',
  purple: '#b16286',
  purple_h: '#d3869b',
  aqua: '#689d6a',
  aqua_h: '#83c07c',
  orange: '#d65d0e',
  orange_h: '#fe8019',
  bg: bg,
  bg0: '#1d2021',
  bg1: bg,
  bg2: '#504945',
  bg3: '#665c54',
  bg4: '#7c6f64',
  fg: fg,
  fg0: '#fbf1c7',
  fg1: fg,
  fg2: '#d5c4a1',
  fg3: '#bdae93',
  fg4: '#a89984',
  gray: '#a89984',
  gray_h: '#928374',
}

export let key_des = [
  ['index', 'idx', 'record index'],

  [
    'srv_count',
    'ssc',
    'number of connections to the same host as the current connection in the past two seconds',
  ],
  ['serror_rate', 'SYN', 'percent of connections that have "SYN" errors'],
  [
    'srv_serror_rate',
    'sSYN',
    'percent of same-service connections that have "SYN" errors',
  ],
  ['rerror_rate', 'REJ', 'percent of connections that have "REJ" errors'],
  [
    'srv_rerror_rate',
    'sREJ',
    'percent of same-service connections that have "REJ" errors',
  ],
  ['same_srv_rate', 'ssr', 'percent of connections to the same service'],
  ['diff_srv_rate', 'dsr', 'percent of connection to different services'],
  ['srv_diff_host_rate', 'dhr', 'percent of connections to different hosts'],
  ['dst_host_count', 'dhc', 'destination host count'],
  ['dst_host_srv_count', 'hsc', 'number of connections to destination host'],
  [
    'dst_host_same_srv_rate',
    'hssr',
    'percent of connections to same destination host',
  ],
  [
    'dst_host_diff_srv_rate',
    'hdsr',
    'percent of connections to different destination hosts',
  ],
  [
    'dst_host_same_src_port_rate',
    'hspr',
    'percent of connections to same destination host port',
  ],
  [
    'dst_host_srv_diff_host_rate',
    'hsdr',
    'percent of connections different host',
  ],
  [
    'dst_host_serror_rate',
    'dSYN',
    'percent of destination host connections that have "SYN" errors',
  ],
  [
    'dst_host_srv_serror_rate',
    'dsSYN',
    'percent of destination host same-service connections that have "SYN" errors',
  ],
  [
    'dst_host_rerror_rate',
    'dREJ',
    'percent of destination host connections that have "REJ" errors',
  ],
  [
    'dst_host_srv_rerror_rate',
    'dsREJ',
    'percent of destination host same-service connections that have "REJ" errors',
  ],
]
