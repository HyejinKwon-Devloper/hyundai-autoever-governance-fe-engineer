import FloatingButton from '@/app/component/button/FloatingButton';
import MSWBootstrap from '@/app/MSWBootstrap';

export default function Container(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <>
      <MSWBootstrap>
        <div className="container">
          {children}
          <FloatingButton />
        </div>
      </MSWBootstrap>
    </>
  );
}
