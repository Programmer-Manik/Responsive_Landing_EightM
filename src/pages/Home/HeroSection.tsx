import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import MacBook from '@/assets/images/MacBook.jpg'

const HeroSection = () => {
   return (
      <Container className="grid grid-cols-2">
            <div>
               <h1 className="text-8xl ">
                  <span className="">Don't worry,</span>
                  <br />
                  <span className="">We'll fix it.</span>
               </h1>
               <p>
                  Welcome to <span>iRepair</span>, your one-stop place for all kinds of <span>MacBook repairs</span> and diagnostics.
               </p>
               <Button>Book a Service</Button>
            </div>
            <div>
               <img src={MacBook} alt="" />
            </div>
      </Container>
   );
};

export default HeroSection;