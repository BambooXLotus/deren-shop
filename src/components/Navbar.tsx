import Link from "next/link";
import { Container } from "./ui/Container";
import { MainNav } from "./MainNav";

type NavbarProps = {
  id?: string;
};

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <div className="border-b ">
      <Container>
        <div className="lg:px8 relative flex h-16 items-center px-4 sm:px-6">
          <Link href="/" className="lg:ml09 ml-4 flex gap-x-2">
            <p className="text-xl font-bold">SHOP</p>
          </Link>
          <MainNav />
        </div>
      </Container>
    </div>
  );
};
