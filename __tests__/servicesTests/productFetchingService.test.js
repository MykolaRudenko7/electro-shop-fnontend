import axios from 'axios'
import ProductsService from 'src/services/productFetchingService'
import { productFetchingServiceMock } from '__mocks__/productFetchingServiceMock'

const { productsSuccessResponse, laptopsErrorResponse, newProductsErrorResponse } =
  productFetchingServiceMock

jest.mock('axios', () => ({
  get: jest.fn(),
  create: jest.fn(() => axios),
}))

describe('ProductFetchingService API requests', () => {
  it('Should return laptops data on successful request', async () => {
    axios.get = jest.fn().mockResolvedValue(productsSuccessResponse)

    const laptops = await ProductsService.fetchLaptops()

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(laptops).toEqual(productsSuccessResponse.data)
    expect(laptops).toMatchSnapshot()
  })

  it('Should return an object with error status and message if laptops request is incorrect', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(laptopsErrorResponse))

    await expect(ProductsService.fetchLaptops()).rejects.toMatchObject(laptopsErrorResponse)
  })

  it('Should return new products data on successful request', async () => {
    axios.get = jest.fn().mockResolvedValue(productsSuccessResponse)

    const newProducts = await ProductsService.fetchNewProducts()

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(newProducts).toEqual(productsSuccessResponse.data)
    expect(newProducts).toMatchSnapshot()
  })

  it('Should return an object with error status and message if new products request is incorrect', async () => {
    axios.get.mockImplementationOnce(() => Promise.reject(newProductsErrorResponse))

    await expect(ProductsService.fetchLaptops()).rejects.toMatchObject(newProductsErrorResponse)
  })
})
