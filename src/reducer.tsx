export type Stateprops={
    user:string,
    token:string,
    notes:{id:String,title:string,note:string}[],
    deletedTodos:string[],
    loading:boolean
}
type ActionProp = {
    type:'Add',
    payload:number
}
export const reducer = (state:Stateprops,action:ActionProp)=>{
    return state
}