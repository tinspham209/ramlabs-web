import { useRouter } from 'next/navigation';
import Button from '../Button';

const Search = () => {
  const router = useRouter();
  return (
    <div className="flex flex-row items-center">
      <div className="mr-4">Search</div>
      <Button
        onClick={() => {
          router.push('/admin');
        }}
      >
        Admin
      </Button>
    </div>
  );
};

export default Search;
