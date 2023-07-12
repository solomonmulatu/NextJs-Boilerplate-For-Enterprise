import Image from 'next/image';

export default function Page() {
  return (
    <main className="border">
      <div>
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={50}
          height={37}
          priority
        />
      </div>
    </main>
  );
}
