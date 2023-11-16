import { useQuery } from '@tanstack/react-query';
import { IResponseBase, getProducsFromAPI } from './api/api';
import { Title } from './_style';

export default function Home() {
  const { data, error, isError, isSuccess, isLoading } = useQuery<IResponseBase>({ 
    queryKey: ['getAllProducts'],
    queryFn: () => getProducsFromAPI({}) 
  })

  if (isError || error || data?.count === 0) {
    return (
      <div>Error</div>
    )
  }

  if (isLoading) {
    return (
      <div>isLoading</div>
    )
  }

  return (   
  <Title>
    Olá mundo
  </Title>
  )
}
