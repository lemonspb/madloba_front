import Link from "next/link";

const list = [
  {
    name: "Одежда, обувь и аксессуары",
    id: "1",
    isOpen: false,
    url: "closing_shoes",
    child: [
      {
        name: "Женская одежда",
        id: "2",
        url: "woman_clothing",
      },
      {
        name: "Мужская одежда",
        id: "3",
        url: "man_clothing",
      },
      {
        name: "Детская одежда",
        id: "4",
        url: "kids_clothing",
      },
    ],
  },
  {
    name: "Транспорт",
    id: "5",
    isOpen: false,
    url: "transport",
    child: [
      {
        name: "Личный",
        id: "6",
        url: "private",
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
                <div key={child.name}>
                  <Link href={child.url}>{child.name}</Link>
                  {child.name}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
