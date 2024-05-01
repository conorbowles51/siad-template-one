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
      <p className="ml-5 text-zinc-500 italic text-2xl text-center font-light">
      &#34;{text}&#34;
      </p>
      <Avatar>
        {avatar}
      </Avatar>
    </div>
  );
}
 
export default TestimonialCard;