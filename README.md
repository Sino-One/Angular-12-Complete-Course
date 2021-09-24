# Angular-12-Complete-Course

1ere app étape par étape : CourseApp

Ensuite prj routing final jusque ngrx routing

Ensuite implémentation manuelle a partir du projet complet ngrx-09

Projet ToDo : 

Créer un store pour ajouter, modifier, et supprimer des todos

Créer une todo-list :

Une todo-list est une liste de chose à faire, un todo est matérialisé par un libellé et un switch on/off pour savoir si le todo a été réalisé

L’application doit permettre de :


	
 Créer un todo (formulaire)
	
 Modifier un toto (même formulaire, patch value)
	
 Supprimer un todo
	
 Naviguer (entre la liste et le formulaire)
	
 Marquer le todo comme fait ou non (switch ng_value_accessor)
	

		
Quand on switch sur ‘on’ le libellé du todo est barré

model todo = {
id: number,
content: string,
done: boolean
}

avec un customValidator pour vérifier de ne pas créer une toDo avec un Id qui existe déjà
+ avec control value accessor sur le switch 
