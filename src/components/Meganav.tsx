import { NavLink } from 'react-router-dom';

import '../styles/pages/store.scss';
import '../styles/components/productPreview.scss';

export function Meganav(props: { data: Collection[]; selected: string }) {
  return (
    <div className="mega-menu">
      <ol>
        {props &&
          props.data
            .filter((item: Collection) =>
              item.category.includes(props.selected)
            )
            .map((item: Collection) => (
              <li key={item.navheader}>
                <h1>
                  <NavLink
                    to={'/collection/' + item.slug.current}
                    className="list-link"
                  >
                    {item.navheader}
                  </NavLink>
                </h1>
                {item.navelement.map((item: any) => (
                  <p key={item}>
                    <NavLink
                      to={
                        '/collection/' +
                        item.replace(/[^A-Z0-9]/gi, '-').toLowerCase()
                      }
                      className="list-link"
                    >
                      {item}
                    </NavLink>
                  </p>
                ))}
              </li>
            ))}
      </ol>
    </div>
  );
}
