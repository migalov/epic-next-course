export default function handler(req, res) {
  const config = [
    {
      name: 'printFormat',
      label: 'Формат печати',
      options: ['A4', 'A3', 'Letter'],
    },
    {
      name: 'paperType',
      label: 'Тип бумаги',
      options: ['Мелованная', 'Картон', 'Офсетная', 'Самоклейка'],
      dependsOn: 'printFormat',
    },
    {
      name: 'paperWeight',
      label: 'Плотность бумаги (г/м²)',
      options: [
        {'Мелованная': [115, 130, 150, 170, 200, 250, 300]},
        {'Офсетная': [80, 100, 120, 160, 190]},
        {'Картон': [270]},
        {'Самоклейка': []}
      ],
      dependsOn: 'paperType',
    },
    {
      name: 'lamination',
      label: 'Ламинация',
      options: {
        'Мелованная': ['1+1 гл.', '1+1 мат.', '1+1 софт тач', '1+0 мат.']
      },
      dependsOn: 'printFormat',
    },
  ];

  res.status(200).json(config);
}