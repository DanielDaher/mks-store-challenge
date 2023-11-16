"use client"
import { useQuery } from '@tanstack/react-query';
import { MainContainer } from './styles';
import { IResponseBase } from '@/types/api';
import { getProducsFromAPI } from '@/api/api';

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
  <MainContainer>
    Olá mundo
  </MainContainer>
  )
}
