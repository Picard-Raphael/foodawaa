import { useForm } from 'react-hook-form'
import { Button } from '../../../components/Button'
import Meta from '../../../layouts/Meta'
import { Main } from '../../../templates/Main'
import classes from '../../../styles/pages/ProductCreate.module.scss'
import { Product } from '../..'

const ProductCreate = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
  return (
    <Main
      meta={<Meta title="Foodawaa" description="Foodawaa create product" />}>
      <div className={classes.productcreate}>
        <form className={classes['productcreate-form']} onSubmit={onSubmit}>
          <div className={classes['productcreate-form__name-price']}>
            <div className={classes['productcreate-form__div-input']}>
              <label htmlFor="name">Nom du produit</label>
              <input
                {...register('name', { required: true })}
                placeholder="Nom du produit"
              />
              {errors.name?.type === 'required' && 'Nom du produit obligatoire'}
            </div>
            <div className={classes['productcreate-form__div-input']}>
              <label htmlFor="price">Prix</label>
              <input
                {...register('price', { required: true })}
                placeholder="0, 00€"
                type="number"
                min="0.00"
                max="10000.00"
                step="0.01"
              />
              {errors.price && 'Le prix est obligatoire'}
            </div>
          </div>
          <div className={classes['productcreate-form__div-input']}>
            <label htmlFor="description">Description</label>
            <input
              {...register('description', { required: true })}
              placeholder="Description du produit"
            />
            {errors.description && 'La description est obligatoire'}
          </div>
          <div className={classes['productcreate-form__div-input']}>
            <label htmlFor="image">Image</label>
            <input
              {...register('image', { required: true })}
              placeholder="Url de l'image"
            />
            {errors.image && 'Une image est obligatoire'}
          </div>

          <Button
            label="Ajouter un produit"
            color="primary"
            type="submit"
            size="large"
          />
        </form>
      </div>
    </Main>
  )
}

export default ProductCreate
