package com.example.gymmanagement;
import androidx.appcompat.app.AppCompatActivity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;
import java.util.ArrayList;
import java.util.Arrays;
public class Main3cActivity extends AppCompatActivity {
   TextView name,name2;
   @Override
   protected void onCreate(Bundle savedInstanceState) {
       super.onCreate(savedInstanceState);
       setContentView(R.layout.activity_main3c);
       name=(TextView) findViewById(R.id.textView);
       name2=(TextView) findViewById(R.id.textView2);
       Bundle bundle=getIntent().getExtras();
       String value1=bundle.getString("value3");
       name2.setText(value1);
       String[] states = {"Mr. A", "Mr. B", "Mr. C", "Mr. D", "Mr. E", "Mr. F", "Mr. G", "Mr. H", "Mr. I","Mr. A", "Mr. B", "Mr. C", "Mr. D", "Mr. E", "Mr. F", "Mr. G", "Mr. H", "Mr. I"};
       final ArrayList arrayList = new ArrayList(Arrays.asList(states));
       ListView listView = findViewById(R.id.listview);
       ArrayAdapter arrayAdapter = new ArrayAdapter(this,android.R.layout.simple_list_item_1,arrayList);
       listView.setAdapter(arrayAdapter);
       listView.setOnItemClickListener(new AdapterView.OnItemClickListener()
       {
           @Override
           public void onItemClick(AdapterView<?> parent, View view, int position, long id)
           {
               name.setText((String) arrayList.get(position));
               Toast.makeText(getApplicationContext(),"You selected Trainer: "+arrayList.get(position),Toast.LENGTH_SHORT).show();
           }
       });
   }

   public void done(View view) {
       final String Trainer = name.getText().toString();
       final String namee = name2.getText().toString();
       Intent intent=new Intent(this,Main2Activity.class);
       intent.putExtra("value3", Trainer);
       intent.putExtra("value1", namee);
       startActivity(intent);
   }
}
