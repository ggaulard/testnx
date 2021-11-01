import { Button } from 'antd';
import useTest from '../data/test/use-test';
import styles from './index.module.less';

export function Index() {
  const {test, loadTest, loading} = useTest();
  return (
    <div className={styles.page}>
      {loading ? "loading" : test.content}
      <Button onClick={loadTest}>Test</Button>
    </div>
  );
}

export default Index;
