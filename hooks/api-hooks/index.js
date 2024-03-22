import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { API, USER_API } from '../../api/utils';

const fetcher_with_auth = async (url, params) => {
  const data = await USER_API(url, { params: params })
    .then((response) => response.data)
    .then((data) => data.metaData);

  return data;
};

const fetcher = async (url, params) => {
  const data = await axios(url, { params: params })
    .then((response) => response.data)

  return data;
};

export const useFetch = (url, params, enabled) => {
  return useQuery([url, params], () => fetcher(url, params), {
    enabled
  });
};

export const useFetchAuth = (url, params, enabled) => {
  return useQuery([url, params], () => fetcher_with_auth(url, params), {
    enabled
  });
};


const useGenericMutation = (func, key, params, onSuccessAPI, onErrorAPI) => {
  const queryClient = useQueryClient();
  return useMutation(func, {
    onSuccess: (data) => {
      onSuccessAPI(data);
    },
    onError: (error) => {
      onErrorAPI(error);
    },
    onSettled: () => {
      queryClient.invalidateQueries([key, params]);
    },
  });
};

export const useDelete = (url, params, onSuccessAPI = () => { }, onErrorAPI = () => { }, key) => {
  return useGenericMutation(
    (id) => axios.delete(`${url}/${id}`),
    key,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};


export const usePost = (url, params, onSuccessAPI = () => { }, onErrorAPI = () => { }, key) => {
  return useGenericMutation(
    async (data) => await API.post(url, data).then((response) => response.data)
      .then((data) => data.metaData),
    key,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};

export const usePostAuth = (url, params, onSuccessAPI = () => { }, onErrorAPI = () => { }, key) => {
  return useGenericMutation(
    async (data) => await USER_API.post(url, data).then((response) => response.data)
      .then((data) => data.metaData),
    key,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};

export const useUpdate = (url, params, onSuccessAPI = () => { }, onErrorAPI = () => { }, key) => {
  return useGenericMutation(
    (data) => axios.put(url, data),
    key,
    params,
    onSuccessAPI,
    onErrorAPI
  );
};


