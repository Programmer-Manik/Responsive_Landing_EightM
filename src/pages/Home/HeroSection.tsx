import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import MacBook from "@/assets/images/MacBook.jpg";

const HeroSection = () => {
  return (
    <Container className="h-[calc(100vh-64px)] grid grid-cols-2 place-content-center">
      <div>
        <h1 className="text-8xl font-bold ">
          <span className="text-gray">Don't worry,</span>
          <br />
          <span>We'll fix it.</span>
        </h1>
        <p>
          Welcome to <span>iRepair</span>, your one-stop place for all kinds of{" "}
          <span>MacBook repairs</span> and diagnostics.
        </p>
        <Button>Book a Service</Button>
      </div>
      <div>
        <img className="w-full rounded-lg" src={MacBook} alt="" />
      </div>
    </Container>
  );
};

export default HeroSection;
