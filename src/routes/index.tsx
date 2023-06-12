import { Card } from 'components/card';
import { tokens } from 'tokens';

export default function Home() {
  return (
    <main>
      <Card backgroundGradient={[tokens.bg.base, tokens.bg.high]}>Hello world!</Card>
    </main>
  );
}
