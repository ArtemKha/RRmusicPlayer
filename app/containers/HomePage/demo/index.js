const formatData = (data) => {
  const list = data.map((item) => {
    const duration = item.duration.split(':'); // split it at the colons

    // parse seconds (minutes are worth 60 seconds)
    const minutes = parseInt(duration[0], 10) * 60;
    const newItem = { ...item };
    newItem.duration = minutes + parseInt(duration[1], 10);

    // source change
    const source = `https://archive.org/download/mythium/${item.file}.mp3`;
    newItem.source = source;
    return newItem;
  });

  return list;
};

const data = [
  {
    track: 1,
    name: "All This Is - Joe L.'s Studio",
    duration: '2:46',
    file: 'JLS_ATI',
  },
  {
    track: 2,
    name: 'The Forsaken - Broadwing Studio (Final Mix)',
    duration: '8:30',
    file: 'BS_TF',
  },
  {
    track: 3,
    name: "All The King's Men - Broadwing Studio (Final Mix)",
    duration: '5:01',
    file: 'BS_ATKM',
  },
  {
    track: 4,
    name: 'The Forsaken - Broadwing Studio (First Mix)',
    duration: '8:31',
    file: 'BSFM_TF',
  },
  {
    track: 5,
    name: "All The King's Men - Broadwing Studio (First Mix)",
    duration: '5:05',
    file: 'BSFM_ATKM',
  },
  {
    track: 6,
    name: 'All This Is - Alternate Cuts',
    duration: '2:48',
    file: 'AC_ATI',
  },
  {
    track: 7,
    name: "All The King's Men (Take 1) - Alternate Cuts",
    duration: '5:44',
    file: 'AC_ATKMTake_1',
  },
  {
    track: 8,
    name: "All The King's Men (Take 2) - Alternate Cuts",
    duration: '5:26',
    file: 'AC_ATKMTake_2',
  },
  {
    track: 9,
    name: 'Magus - Alternate Cuts',
    duration: '5:46',
    file: 'AC_M',
  },
  {
    track: 10,
    name: 'The State Of Wearing Address (fucked up) - Alternate Cuts',
    duration: '5:25',
    file: 'AC_TSOWAfucked_up',
  },
  {
    track: 0,
    name: "Magus - Popeye's (New Years '04 - '05)",
    duration: '5:53',
    file: 'PNY04-05_M',
  },
];

export default formatData(data);
