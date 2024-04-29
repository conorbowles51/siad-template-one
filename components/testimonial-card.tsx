import Avatar from "./avatar";

const TestimonialCard = ({
  avatar,
  text
}: {
  avatar: any,
  text: string
}) => {
  return (
    <div className="flex flex-col gap-5 text-center items-center justify-center p-10">
      <p className="ml-5 text-zinc-500 italic text-2xl font-semibold text-center">
        "{text}"
      </p>
      <Avatar>
        {avatar}
      </Avatar>
    </div>
  );
}
 
export default TestimonialCard;