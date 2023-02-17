const list = [
  {
    name: "Одежда, обувь и аксессуары",
    id: "1",
    child: [
      {
        name: "Женская одежда",
        id: "2",
      },
      {
        name: "Мужская одежда",
        id: "3",
      },
      {
        name: "Детская одежда",
        id: "4",
      },
    ],
  },
];

export function ListCategory() {
  return (
    <div>
      {list.map((item: any) => {
        return (
          <div key={item.name}>
            <div>{item.name}</div>
            <div>
              {item.child.map((child: any) => (
                <div key={child.name}>{child.name}</div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
