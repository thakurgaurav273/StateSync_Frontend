"use client";
import { api } from "@/lib/api";
import { useState } from "react";

type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export const useRequest = ({
  url,
  method,
}: {
  url: string;
  method: Method;
}) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const request = async (payload?: any, params?: any) => {
    try {
      setLoading(true);
      setError(null);

      const response = await api.request({
        url,
        method,
        data: payload,  
        params,
      });

      setData(response.data);
      return response.data;
    } catch (err: any) {
      setError(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { request, data, error, loading };
};