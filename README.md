#Servicio cliente-carro
Este front lo que hace es mostrar como primera pagina un listado de carros que se obtienen de una api(/cool-cars), tambien tiene la opcion para ver un listado de clientes que se obtiene de otra api(owners) o ver un lista de clientes propietarios de carros.

#Carros
En el listado de carros se puede añadir un carro y tambien al darle click al nombre se puede editar o eliminar el vehiculo, esto lo hace mediante el componente car-edit el cual utiliza el servicio car.service que llama a la api(cool-cars) y a la api(cars), este servicio se encarga de retornar la lista de todos los carros mediante el metodo get all o retorna un solo vehiculo mediante get(id) y retornando el componente car-edit este carga el nombre del carro y el propietario asociado para su modificacion.

#Clientes
En el listado de clientes se puede añadir, modificar o eliminar un cliente; esto se hace mediante el componente owner-edit carga el dni, nombre y profesión de un cliente que se quiera modificar, este utiliza el servicio owner.service que llama a la api owners la cual retorna al cliente asociado a ese dni. Ademas de esto se utiliza el componente owner-list el cual se encarga de listar a todos los clientes que hayan en la api owners y esto lo hace utilizando tambien el owner.service aplicando el metodo getall.

#Propietarios
Es el listado de los vehiculos con su propietario correspondiente, esto se hace con el componente carownerlist el cual se encarga de llamar a la api de los carros para listarlos, y utiliza el dni del cliente responsable de ese carro para dar la lista de carro-propietario, utiliza el car.service y el owner.service.

#Dificultades
Por dificultades de tiempo y de tratar de investigar sobre este tema de angular, no fui capaz de desarrollar la funcionalidad para eliminar varios clientes ni la de al eliminar un propietario se debe eliminar la relacion con el carro.
