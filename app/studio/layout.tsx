

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <section className='h-[100dvh] bg-bgGreySolid'>
        {children}
    </section>
  )
}
