interface NavBarItem {
  code: string;
  name: string;
  icon: string;
}

interface NavBarProps {
  dataSource?: NavBarItem[];
}

/**
 * 侧边栏, 用于展示多个账本的目录
 */
const NavBar: React.FC<NavBarProps> = ({ dataSource }) => {
  return (
    <div className="nav-bar">
      {dataSource && dataSource.map((item) => (
        <div key={item.code} className="nav-bar-item">
          {item.name}
        </div>
      ))}
    </div>
  );
};

NavBar.displayName = "NavBar";
NavBar.defaultProps = {
  dataSource: [],
};

export default NavBar;
