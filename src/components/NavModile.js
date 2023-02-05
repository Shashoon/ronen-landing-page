

const NavMobile = () => {

  const data = [
    {
      name: 'אודות',
      href: '#about',
    },
    {
      name: 'שירותים',
      href: '#services',
    },
    {
      name: 'יצירת קשר',
      href: '#contact',
    }
  ];

  return (
    <ul className='flex flex-col px-6 py-8 gap-y-4 z-10'>
      {data.map((curr, _index) => {
        return (
          <li key={_index}>
            <a className='text-white' href={curr.href}>
              {curr.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default NavMobile;