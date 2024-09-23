import { usePathname } from "next/navigation";

const useActiveLink = (path, deep = false) => {
  const pathname = usePathname();

  const checkPath = path.startsWith("#");

  const currentPath = path === "/" ? "/" : `${path}`;

  const normalActive = !checkPath && pathname === currentPath;

  const deepActive = !checkPath && pathname.includes(currentPath);

  return deep ? deepActive : normalActive;
};

export default useActiveLink;
