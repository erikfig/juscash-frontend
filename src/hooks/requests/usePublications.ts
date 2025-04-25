import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { listAll as listAllService, getOne as getOneService, update as updateService } from '../../services/publicationsService';

export function usePublications() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const listAll = useCallback(async (filters: Record<string, string> = {}) => {
    setLoading(true);
    setError(null);

    try {
      return await listAllService(navigate, filters);
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  const getOne = async (id: string) => {
    setLoading(true);
    setError(null);

    try {
      return await getOneService(id, navigate);
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  const update = async (id: string, data: Record<string, any>) => {
    setLoading(true);
    setError(null);

    try {
      return await updateService(id, data, navigate);
    } catch (err: any) {
      setError(err.message);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { listAll, getOne, update, loading, error };
}
