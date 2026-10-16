import{runtime,owner}from'./runtime.mjs';import{createUpdateService,updateHandlers}from'./update-service.mjs';
await runtime(async()=>{const updater=await createUpdateService(),stop=updater.start();return{handlers:{...updateHandlers(updater),'updater.notes':async(a={},c)=>{owner(c);return updater.notes(a._locale)},'updater.mark':async(a,c)=>{owner(c);return updater.mark(a.ids,a.read)}},stop}});
