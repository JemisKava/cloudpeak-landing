import Image from "next/image";
import Card from "@/components/card";

interface LestCardProps {
  title: string;
  logo: string;
  description: string;
}

const LestCard = ({ title, logo, description }: LestCardProps) => (
  <Card>
    <div className="text-center flex flex-col gap-y-4 items-center justify-center p-6">
      <div className="h-[60px] w-[60px] rounded-full bg-card relative flex items-center justify-center">
        <Image
          src={logo}
          alt={title}
          width={24}
          height={24}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <h4 className="text-h4">{title}</h4>
      <p className="text-body-14 text-neutral-2">{description}</p>
    </div>
  </Card>
);

export default LestCard 
