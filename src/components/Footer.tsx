type FooterProps = {
  id?: string;
};

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto py-10">
        <p className="text-sx text-center text-black">
          &copy; 2023 Deren, All rights reserved.
        </p>
      </div>
    </footer>
  );
};
