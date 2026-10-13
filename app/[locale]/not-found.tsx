import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="wrap page narrow">
      <h1>هذه الصفحة غير موجودة</h1>
      <p lang="fr" dir="ltr">Cette page n&apos;existe pas.</p>
      <p>
        <Link className="btn btn-solid" href="/ar">العودة إلى الرئيسية</Link>
      </p>
    </div>
  );
}
