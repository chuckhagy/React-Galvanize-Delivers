/* eslint-disable import/first */
import data from './mock-data.json'
jest.mock('../requests/getMenuItems')
import getMenuProcess from '../redux/thunks/getMenuProcess'
import getMenuItems from '../requests/getMenuItems'

describe('get menue process THUNK', () => {
  it('calls getMenu API utility function, returns an array, and dispatches successfully', () => {

    //first one below - check the type

    const thunk = getMenuProcess();
    expect(typeof thunk).toBe('function')

    //the rest are below

    const dispatch = jest.fn();
    const getState = () => ({})
    getMenuItems.mockReturnValueOnce(Promise.resolve([...data]))
    return thunk(dispatch, getState).then(items => {
      expect(getMenuItems).toBeCalled();
      expect(items).toEqual([...data])
      expect(dispatch).toBeCalledWith({type: 'GET_ITEMS', newMenuItems: items})
    })
  } )
})
