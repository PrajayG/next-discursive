import Link from 'next/link';
import Ticker from './Ticker'
import { getGlobalData} from '../utils/global-data';

export function getStaticProps() {
  const globalData = getGlobalData();
  console.log('is this running')
  return {props: { globalData}}
}


export default function Header({ name, props }) {
  return (
    <header className="header">
          <h1 className="header-title"><a href="/"> PJ GARDEN</a></h1>
          <div className="header-search">
            {/* <span>Search box {props} {name}</span> */}
          </div>
          <div className="header-nav">
            <span>ABOUT <span class="symbol"> a</span></span>

          </div>
    </header>
  );
}

