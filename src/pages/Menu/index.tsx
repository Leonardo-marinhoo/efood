import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import { useGetRestaurantQuery } from '../../services/api'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { updateMenu } from '../../store/reducers/menu'
import Header from '../../Containers/Header'
import MenuList from '../../Containers/MenuList'

const Menu = () => {
  const { id } = useParams()
  const { data } = useGetRestaurantQuery(`${id}`)
  const dispatch = useDispatch()

  useEffect(() => {
    if (data) {
      dispatch(
        updateMenu({
          ...data
        })
      )
    }
  }, [data])

  return (
    <>
      <Header />
      <Banner />
      <MenuList />
    </>
  )
}

export default Menu
