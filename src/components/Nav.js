

const Nav = () => {
    const data = [
        {
          name:  'אודות',
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
        <nav>
            <ul className="flex gap-x-8">
                {
                    data.map((current, _index) => {
                        return (
                            <li key={_index}>
                                <a href={current.href} >{current.name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
    )
}

export default Nav;