import { MainLayout } from '@/layouts/MainLayout';
import BlockA from '@/layouts/ContentLayout/BlockA';
import { TypeDesktopValue } from '@/common/components/TypeDesktopValue';
import { NewsCard } from '@/modules/NewsCard';

const TablePage = () => {
  return (
    <MainLayout>
      <BlockA>
        <TypeDesktopValue
          CONTClassName="type-desktop-value-instance"
          divClassName="type-desktop-value-front-animate-false-instance"
          divClassNameOverride="type-desktop-value-front-animate-false-instance"
          imagenClassName="type-desktop-value-front-animate-false"
        />
        <NewsCard />
      </BlockA>
    </MainLayout>
  );
};

export default TablePage;
