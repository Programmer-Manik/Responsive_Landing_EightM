import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import MacBook from "@/assets/images/MacBook.jpg";

const HeroSection = () => {
  return (
    <Container className=" h-[calc(100vh-80px)] grid grid-cols-1 lg:grid-cols-2 place-content-center">
      <div>
        <h1 className="text-5xl lg:text-8xl font-bold text-nowrap">
          <span className="text-gray">Don't worry,</span>
          <br />
          <span>We'll fix it.</span>
        </h1>
        <p className="max-w-[50ch] text-lg mt-10 mb-5 text-dark-gray ">
          Welcome to{""} <span className="text-primary-foreground font-semibold">iRepair</span>{""}, your one-stop place for all kinds of{" "}
          <span className="text-primary-foreground font-semibold">MacBook repairs</span>{""} and diagnostics.
        </p>
        <Button>Book a Service</Button>
      </div>
      <div className="mt-10 w-3/7 lg:w-full  mx-auto">
        <img className="w-[90%] rounded-3xl -rotate-[30deg] h-[95%] object-contain" src={MacBook} alt="" />
      </div>
    </Container>
  );
};

export default HeroSection;
