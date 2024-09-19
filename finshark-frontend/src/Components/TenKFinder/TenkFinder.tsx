import React, { useEffect, useState } from 'react'
import { CompanyTenK } from '../../company';
import { getTenk } from '../../api'
import TenKFinderItem from './TenKFinderItem';
import Spinner from '../Spinner/Spinner';

type Props = {
    ticker : string;
}

const TenkFinder = ({ticker}: Props) => {

    const [companyData ,  setCompanyData] = useState<CompanyTenK[]>();

    useEffect(() => {
        const getTenKData = async () => {
             const value = await getTenk(ticker)
             setCompanyData(value?.data);   
        };
        getTenKData();
    },[ticker])
  return (
    <>
     <div className="inline-flex rounded-md shadow-sm m-4" role="group">
      {companyData ? (
        companyData?.slice(0, 5).map((tenK) => {
          return <TenKFinderItem tenK={tenK} />;
        })
      ) : (
        <Spinner />
      )}
    </div>
    
    </>
  )
}

export default TenkFinder